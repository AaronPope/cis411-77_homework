using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcMovie.Controllers
{
    public class HelloWorldController : Controller
    {
        //
        // GET: /HelloWorld/
        public string Index()
        {
            return "This is my <b>default</b> action...";
        }

        //
        // Get: /HelloWorld/Welcome
        public string Welcome(string name = "...your name is now 'Walter'", int runTimes = 1)
        {
            return HttpUtility.HtmlEncode("Hello " + name + "\n NumTimes is: " + runTimes);
        }
	}
}