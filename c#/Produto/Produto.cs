using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace Produto {
     class Produto {
        public string Nome;
        public int Quantidade;
        public double Preco;

        public double ValorTotalEmEstoque() {
            return Preco * Quantidade;
        }

        public override string ToString() {
            return Nome + ", $ " + Preco.ToString("F2", CultureInfo.InvariantCulture) + ", " + Quantidade + " unidades, Total: $ " + ValorTotalEmEstoque().ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}
