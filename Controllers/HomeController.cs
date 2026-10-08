using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MVCProject.Models;

namespace MVCProject.Controllers;

public class HomeController : Controller
{
    private readonly IWebHostEnvironment _environment;

    public HomeController(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    public IActionResult Index()
    {
        var siteEntry = Path.Combine(_environment.WebRootPath, "index.html");
        return PhysicalFile(siteEntry, "text/html");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
