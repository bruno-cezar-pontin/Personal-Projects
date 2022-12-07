using System.Web;
using System.Web.Optimization;

namespace DesafioSeteForm
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-3.4.1.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/jquerymethod").Include(
                "~/Scripts/additional-methods.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/demojquery").Include(
                "~/Scripts/jquerydemo.css"));

            bundles.Add(new ScriptBundle("~/bundles/validar").Include(
                "~/Scripts/validacoes.js"));



            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/myapp.css"));

            bundles.Add(new ScriptBundle("~/bundles/mask").Include(
                "~/Scripts/jquery.mask.js"));
            bundles.Add(new ScriptBundle("~/bundles/scriptmask").Include(
                "~/Scripts/scriptmask.js"));
        }
    }
}
