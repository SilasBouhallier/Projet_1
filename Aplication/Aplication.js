// Petite application JavaScript - Calculatrice simple
class Calculatrice {
    constructor() {
        this.resultat = 0;
    }

    additionner(a, b) {
        return a + b;
    }

    soustraire(a, b) {
        return a - b;
    }

    multiplier(a, b) {
        return a * b;
    }

    diviser(a, b) {
        if (b === 0) {
            throw new Error("Division par zéro impossible");
        }
        return a / b;
    }

    calculer(expression) {
        try {
            // Évaluation sécurisée d'expressions mathématiques simples
            const result = Function('"use strict"; return (' + expression + ')')();
            return result;
        } catch (error) {
            return "Erreur: " + error.message;
        }
    }
}

// Fonction utilitaire pour formater les nombres
function formaterNombre(nombre) {
    return new Intl.NumberFormat('fr-FR').format(nombre);
}

// Exemples d'utilisation
const calc = new Calculatrice();

console.log("=== Calculatrice JavaScript ===");
console.log("Addition: 5 + 3 =", calc.additionner(5, 3));
console.log("Soustraction: 10 - 4 =", calc.soustraire(10, 4));
console.log("Multiplication: 6 * 7 =", calc.multiplier(6, 7));
console.log("Division: 15 / 3 =", calc.diviser(15, 3));
console.log("Expression complexe: (2 + 3) * 4 =", calc.calculer("(2 + 3) * 4"));
console.log("Nombre formaté:", formaterNombre(1234.56));

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculatrice;
}