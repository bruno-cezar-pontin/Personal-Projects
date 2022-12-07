using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace projectdinamico.Models
{
    public class Person
    {
        public string Name { get; set; }
        
        public int DateofBirth { get; set; }

        public string TemFilho { get; set; }

        public string NameChildren { get; set; }

        public string CDateofBirth { get; set; }
        
    }
}
