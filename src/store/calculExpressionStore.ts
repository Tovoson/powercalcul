import { create } from "zustand";

type MyNewStore = {
  expression: string;
  operandeActuel: string;
  resultatCourant: number;
  operateurEnAttente: string;
  erreur: boolean;

  ajouterChiffre: (chiffre: string) => void;
  ajouterOperateur: (operateur: string) => void;
  calculerResultatIntermediaire: () => void;
  effacer: () => void;
  calculResultatFinal: () => number | undefined;
};

export const useCalculExpressionStore = create<MyNewStore>()((set, get) => ({
  expression: "",
  operandeActuel: "",
  resultatCourant: 0,
  operateurEnAttente: "",
  erreur: false,

  ajouterChiffre: (chiffre: string) =>
    set((state) => ({
      operandeActuel: state.operandeActuel + chiffre,
      expression: state.expression + chiffre,
    })),

  ajouterOperateur: (operateur: string) => {
    const { operandeActuel, operateurEnAttente } = get();

    if (operandeActuel !== "") {
      // s'il y a un operateur en attente, calculer d'abord
      if (operateurEnAttente !== "") {
        get().calculerResultatIntermediaire();
      } else {
        // Premier nombre
        set({ resultatCourant: parseFloat(operandeActuel) });
      }

      set((state) => ({
        operandeActuel: "",
        operateurEnAttente: operateur,
        expression: state.expression + operateur,
      }));
    }
  },

  calculerResultatIntermediaire: () => {
    const { operandeActuel, operateurEnAttente } = get();
    const nombre = parseFloat(operandeActuel);

    switch (operateurEnAttente) {
      case "+":
        set((state) => ({
          resultatCourant: state.resultatCourant + nombre,
        }));
        break;
      case "-":
        set((set) => ({
          resultatCourant: set.resultatCourant - nombre,
        }));
        break;
      case "*":
        set((state) => ({
          resultatCourant: state.resultatCourant * nombre,
        }));
        break;
      case "/":
        try {
          if (nombre !== 0) {
            set((state) => ({
              resultatCourant: state.resultatCourant / nombre,
            }));
          } else {
            throw new Error("Division par zéro");
          }
        } catch (error) {
          set({ erreur: true });
        } finally {
          set({ erreur: false });
        }
        break;
    }
  },

  calculResultatFinal: () => {
    const { operandeActuel, operateurEnAttente, resultatCourant } = get();

    if (operandeActuel !== "" && operateurEnAttente !== "") {
      get().calculerResultatIntermediaire();
      set({
        operandeActuel: "",
        operateurEnAttente: "",
      });

      return resultatCourant;
    }
  },

  effacer: () =>
    set(() => ({
      expression: "",
      operandeActuel: "",
      resultatCourant: 0,
      operateurEnAttente: "",
      erreur: false,
    })),
}));
