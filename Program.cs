using Pomelo.EntityFrameworkCore.MySql;
using Microsoft.EntityFrameworkCore;
using Inventarium.BD;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSwaggerGen();

// Database connection.
var connectionString = "server=localhost;port=3306;database=inventarium;uid=root;password=root";
var serverVersion = new MySqlServerVersion(new Version(8, 0, 27));

builder.Services.AddDbContext<northwindContext>(
    dbContextOptions => dbContextOptions.UseMySql(connectionString, serverVersion)
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
