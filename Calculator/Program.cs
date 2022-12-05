using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {

           // Minha calculadora com quatro funções em C#


                string nameuser;
                int age;
                int operacao;
                int firstnumber;
                int secondnumber;

                Console.WriteLine("Hello to my Calculator");
                Console.ReadLine();

                Console.WriteLine("Whats your name?");
                nameuser = Console.ReadLine();

                Console.WriteLine("Whats ur age?");
                age = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Seja bem vindo" + " " + nameuser + " " + "a minha calculadora. Como você tem " + " " + age + " " + "você está apto para continuar");

                Console.WriteLine("Are you ready?");
                Console.ReadLine();
                Console.ReadLine();


            for (int i = 0; i < 5; i++)
            {

            
                Console.WriteLine("Qual a operação que você quer fazer?    1 = Somar | 2 = Subtrair | 3 = Multiplicar | 4 = Dividir ");
                operacao = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Primeiro Numero");
                firstnumber = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("SegundoNumero");
                secondnumber = Convert.ToInt32(Console.ReadLine());


                switch (operacao)
                {
                    case 1:
                        int result = firstnumber + secondnumber;
                        Console.WriteLine(result);
                        break;

                    case 2:
                        result = firstnumber - secondnumber;
                        Console.WriteLine(result);
                        break;

                    case 3:
                        result = firstnumber * secondnumber;
                        Console.WriteLine(result);
                        break;

                    case 4:
                        result = firstnumber / secondnumber;
                        Console.WriteLine(result);
                        break;
                }
                    


            }



        }
    }
}
