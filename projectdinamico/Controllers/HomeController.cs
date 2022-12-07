using projectdinamico.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace projectdinamico.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SubmitForm()
        {
            return View();

        }

        [HttpPost]
        public ActionResult SubmitForm(FormCollection form)
        {
            string Name = form["Name"].ToString();
            /*  int DOB = Convert.ToInt32(form["DateofBirth"]); */
            string CName = form["NameChildren"];

            /*  int CDOB = Convert.ToInt32(form["CDateofBirth"]); */

            if (string.IsNullOrEmpty(Name) || Name.Length < 3 || Name.Length > 30)
            {
                ModelState.AddModelError("Name", "Incorrect. The name must contain a minimum of 3 and a maximum of 30 characters.");
            }
            else
                if (string.IsNullOrEmpty(CName) || Name.Length < 3 || Name.Length > 30)
            {
                ModelState.AddModelError("NameChildren", "First Children name Incorrect");
            }



            for (int i = 2; i < 11; i++)
            {
                string TName = form["NameChildren" + i];
                if (string.IsNullOrEmpty(TName) || TName.Length < 3 || TName.Length > 30)
                {
                    ModelState.AddModelError("NameChildren", "NameChildren" + " " + i + " " + "name Incorrect");
                }
            }

                if (ModelState.IsValid)
                {
                    return RedirectToAction("Index");
    }


                return View();



        }
    }
}

