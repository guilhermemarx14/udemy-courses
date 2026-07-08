using System;
using System.Globalization;
using System.Runtime.CompilerServices;
using System.Xml;

namespace ReadingData {
    internal class Program {
        static void Main(string[] args) {

            //string frase = Console.ReadLine();//bom dia
            //string x = Console.ReadLine();//vermelho
            //string y = Console.ReadLine();//verde
            //string z = Console.ReadLine();//azul
            //string[] vet = Console.ReadLine().Split(' ');//1 2 3
            //string p1 = vet[0];//1
            //string p2 = vet[1];//2
            //string p3 = vet[2];//3


            //int n1 = int.Parse(Console.ReadLine());//35
            //char ch = char.Parse(Console.ReadLine());//F
            //double n2 = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);//4.32

            //string[] vet2 = Console.ReadLine().Split(' ');//Maria F 22 1.68
            //string nome = vet2[0];
            //char sexo = char.Parse(vet2[1]);
            //int idade = int.Parse(vet2[2]);
            //double altura = double.Parse(vet2[3], CultureInfo.InvariantCulture);


            Console.WriteLine("Entre com seu nome completo:");
            string nomeCompleto = Console.ReadLine();

            Console.WriteLine("Quantos quartos tem na sua casa ?");
            int quartos = int.Parse(Console.ReadLine());

            Console.WriteLine("Entre com o preço de um produto:");
            double preco = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);//4.32

            Console.WriteLine("Entre com o seu último nome, idade e altura:");
            string[] vet3 = Console.ReadLine().Split(' ');
            string ultimoNome = vet3[0];
            int idadeNova = int.Parse(vet3[1]);
            double altura2 = double.Parse(vet3[2], CultureInfo.InvariantCulture);

            Console.WriteLine(nomeCompleto);
            Console.WriteLine(quartos);
            Console.WriteLine(preco.ToString("F2", CultureInfo.InvariantCulture));
            Console.WriteLine(ultimoNome);
            Console.WriteLine(idadeNova);
            Console.WriteLine(altura2.ToString("F2", CultureInfo.InvariantCulture));
        }
    }

}