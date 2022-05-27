using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Inventarium.BD;
using Microsoft.EntityFrameworkCore;

namespace Inventarium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        [HttpGet("productos/Empleados/{year}")]
        public IActionResult GetListaProductosVendidosPorEmpleados(int year)
        {
            var dbContext = new northwindContext();
            var resultado = (from m in dbContext.Movements
                             join md in dbContext.Movementdetails on m.MovementId equals md.MovementId
                             join e in dbContext.Employees on m.EmployeeId equals e.EmployeeId
                             join com in dbContext.Companies on e.CompanyId equals com.CompanyId
                             where m.Date.Year == year && com.CompanyId == 1
                             select new { m.MovementId, md.Quantity, m.Date, e.FirstName, e.LastName, e.EmployeeId } into x
                             group x by new { x.EmployeeId } into g
                             select new
                             {
                                 Total = g.Sum(c => c.Quantity),
                                 Fecha = g.First().Date,
                                 NombreEmpleado = string.Join(" ", g.First().FirstName, g.First().LastName)
                             }

                             )
                             .OrderByDescending(p => p.Total);

            return Ok(resultado);

        }
    }
}
