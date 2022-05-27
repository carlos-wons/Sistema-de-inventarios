using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Inventarium.BD;
using Microsoft.EntityFrameworkCore;

namespace Inventarium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet("listado/{year}")]
        public IActionResult GetListadoPorTrimestre(int year)
        {
            var dbContext = new northwindContext();
            var resultado = (from p in dbContext.Products
            
            join m in dbContext.Movementdetails on p.ProductId equals m.ProductId
                            join m2 in dbContext.Movements on m.MovementId equals m2.MovementId
                            join com in dbContext.Companies on m2.CompanyId equals com.CompanyId
                            where m2.Date.Year == year && m2.CompanyId == 1                   
                            select new {p.ProductName, p.ProductId, m.Quantity, m2.Date } into x
                            group x by new {x.ProductName} into g
                            select new { 
                                ID = g.First().ProductId, 
                                g.Key.ProductName, 
                                Total = g.Sum(c => c.Quantity),
                                Fecha = g.First().Date}
                            )
                            .OrderByDescending(p=>p.Total)
                            .Take(5);
            
            var otro = 
            new {
                trimestre1 = (from x in resultado 
                              where (x.Fecha.Month == 1 || x.Fecha.Month == 2 || x.Fecha.Month == 3) 
                              select new { x.ID, x.ProductName, x.Total, x.Fecha }
                             ),
                trimestre2 = (from x in resultado 
                              where (x.Fecha.Month == 4 || x.Fecha.Month == 5 || x.Fecha.Month == 6) 
                              select new { x.ID, x.ProductName, x.Total, x.Fecha }
                             ),
                trimestre3 = (from x in resultado 
                              where (x.Fecha.Month == 7 || x.Fecha.Month == 8 || x.Fecha.Month == 9) 
                              select new { x.ID, x.ProductName, x.Total, x.Fecha }
                             ),
                trimestre4 = (from x in resultado 
                              where (x.Fecha.Month == 10 || x.Fecha.Month == 11 || x.Fecha.Month == 12) 
                              select new { x.ID, x.ProductName, x.Total, x.Fecha }
                             )
            };
            return Ok(otro);
        } 
            
        [HttpGet("productoPorMes/{year}/{productId}")]
        public IActionResult GetListadoPorMes(int year, int productId)
        {
            var dbContext = new northwindContext();
            var resultado = (from p in dbContext.Products
                             join md in dbContext.Movementdetails on p.ProductId equals md.ProductId
                             join m in dbContext.Movements on md.MovementId equals m.MovementId
                             where m.Date.Year == year && m.CompanyId==1 && p.ProductId==productId
                             select new {p.ProductName, md.Quantity, m.Date } into x
                             group x by new {  x.Date.Month} into n
                             select new
                             {
                                 Mes = n.First().Date.Month,
                                 Cantidad = n.Sum(c => c.Quantity)
                             }).OrderBy(c=>c.Mes);

            return Ok(resultado);
        }
                            
    }
}
