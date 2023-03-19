
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using testes;


Artigo d = new Artigo(12, 10,5080,0,0, 0, "jopel",true);
Prazo p = new Prazo();                          //dias uteis é true ou false
DateTime ? dateA = new DateTime(2022, 04, 28);
dateA = null;
Console.WriteLine("----------------{0}",dateA);
string hj = "12/04/2022";
/*CultureInfo enUs = new CultureInfo("ru-RU");
var beg = DateTime.Parse(hj, enUs);
Console.WriteLine("---{0}", beg);
DateTime aux = new DateTime(2022, 05, 21);
string au = aux.ToString("s");
aux = DateTime.Parse(au);
Console.WriteLine("--------------------------{0}",au);
DateTime dateD = DateTime.Now;
int dias;
while (d.Anos != 0)
{
    dias = d.diasAno(dateA.Year + 1);
    Console.WriteLine(dias);
    d.Dias += dias;
    d.Anos--;

}
while (d.Meses != 0)
{
    aux = aux.AddMonths(1);
    dias = d.diasMes(aux.Month, aux.Year);
    d.Dias += dias;
    d.Meses--;

}
Console.WriteLine(d.Dias);
dateD = p.RetornaCalculoDiasProcessual(d, dateA);


Console.WriteLine("INICIAL:{0}", dateA.ToString("d"));
Console.WriteLine("FINAL:{0}", dateD.ToString("d"));*/


