using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DesafioSeteForm.Models
{
    public class Person : Controller
    {
        public string Nome { get; set; }

        public int Idade { get; set; }

        public string Email { get; set; }

        public DateTime Date { get; set; }

        public int CPF { get; set; }
        public int CNPJ { get; set; }
        public int CartaoCredito { get; set; }

    }
}