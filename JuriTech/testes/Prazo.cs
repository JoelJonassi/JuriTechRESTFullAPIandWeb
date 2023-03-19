using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace testes
{
    internal class Prazo
    {
        int idPrazoCodigo, nrProcesso;
        DateTime dataInicial, dataFinal;



        public Prazo()
        {

        }

        /// <summary>
        /// Funçao que retorna a data final de um prazo processual (nota : o calculo é efetuado tendo em conta apenas dias)
        /// </summary>
        /// <param name="d1"></param>
        /// <param name="dataInicial"></param>
        /// <returns></returns>
        public DateTime RetornaCalculoDiasProcessual(Artigo d1, DateTime dataInicial)
        {
            if (d1.Dias != 0)
            {
                Dictionary<string, bool> lista = new Dictionary<string, bool>();
                DateTime dataFinal = dataInicial.AddDays(d1.Dias);
                Console.WriteLine(dataFinal);
                DateTime NatalFinal = new DateTime(dataInicial.Year + 1, 01, 03);
                DateTime NatalInicial = new DateTime(dataInicial.Year, 12, 22);


                int diasNaoContam = 0;




                dataInicial = dataInicial.AddDays(1);
                for (DateTime data = dataInicial; data < dataFinal; data = data.AddDays(1))
                {



                    if (d1.FeriasPascoa(data) || d1.FeriasVerao(data, data.Year) || d1.FeriasNatal(data, NatalFinal, NatalInicial))
                    {
                        diasNaoContam += 1;

                        lista.Add(data.ToString(), false);


                    }
                    else
                    {
                        lista.Add(data.ToString(), true);

                    }



                    if ((d1.FeriasNatal(data, NatalFinal, NatalInicial) == false) && (d1.FeriasNatal(data.AddDays(-1), NatalFinal, NatalInicial) == true))
                    {
                        NatalInicial = NatalInicial.AddYears(1);
                        NatalFinal = NatalFinal.AddYears(1);
                    }

                    dataInicial = data;


                }



                dataInicial = dataInicial.AddDays(1);

                while (diasNaoContam > 0)
                {
                    if (d1.FeriasPascoa(dataInicial) || d1.FeriasVerao(dataInicial, dataInicial.Year) || d1.FeriasNatal(dataInicial, NatalFinal, NatalInicial))
                    {
                        lista.Add(dataInicial.ToString(), false);
                    }
                    else
                    {
                        diasNaoContam -= 1;
                        lista.Add(dataInicial.ToString(), true);
                    }

                    if ((d1.FeriasNatal(dataInicial, NatalFinal, NatalInicial) == false) && (d1.FeriasNatal(dataInicial.AddDays(-1), NatalFinal, NatalInicial) == true))
                    {
                        NatalInicial = NatalInicial.AddYears(1);
                        NatalFinal = NatalFinal.AddYears(1);
                    }

                    dataInicial = dataInicial.AddDays(1);

                }

                while (d1.fimSemana(dataInicial) || d1.feriado(dataInicial.Year, dataInicial))
                {

                    dataInicial = dataInicial.AddDays(1);

                }


            }
            return dataInicial;
        }
        /// <summary>
        /// Funçao que retorna a data final de um prazo processual em caso de urgência (nota : o calculo é efetuado tendo em conta apenas dias)
        /// </summary>
        /// <param name="d1"></param>
        /// <param name="dataInicial"></param>
        /// <returns></returns>
        public DateTime RetornaCalculoDiasProcessualSos(Artigo d1, DateTime dataInicial)
        {
            DateTime dataFinal = dataInicial.AddDays(d1.Dias);
            while (d1.fimSemana(dataFinal) || d1.feriado(dataFinal.Year, dataFinal))
            {

                dataFinal = dataFinal.AddDays(1);

            }
            return dataFinal;

        }
        /// <summary>
        /// funçao que retorna a data final de um prazo procedimental (nota : o calculo é efetuado tendo em conta apenas dias)
        /// </summary>
        /// <param name="d1"></param>
        /// <param name="dataInicial"></param>
        /// <returns></returns>
        public DateTime RetornaCalculoDiasProcedimental(Artigo d1, DateTime dataInicial)
        {
            if (d1.Dias != 0)
            {
                Dictionary<string, bool> lista = new Dictionary<string, bool>();
                DateTime dataFinal = dataInicial.AddDays(d1.Dias);
                Console.WriteLine(dataFinal);
                DateTime NatalFinal = new DateTime(dataInicial.Year + 1, 01, 03);
                DateTime NatalInicial = new DateTime(dataInicial.Year, 12, 22);


                int diasNaoContam = 0;




                dataInicial = dataInicial.AddDays(1);
                for (DateTime data = dataInicial; data < dataFinal; data = data.AddDays(1))
                {



                    if (d1.feriado(data.Year, data) || d1.fimSemana(data))
                    {
                        diasNaoContam += 1;

                        lista.Add(data.ToString(), false);


                    }
                    else
                    {
                        lista.Add(data.ToString(), true);

                    }

                    dataInicial = data;


                }



                dataInicial = dataInicial.AddDays(1);

                while (diasNaoContam > 0)
                {
                    if (d1.feriado(dataInicial.Year, dataInicial) || d1.fimSemana(dataInicial))
                    {
                        lista.Add(dataInicial.ToString(), false);
                    }
                    else
                    {
                        diasNaoContam -= 1;
                        lista.Add(dataInicial.ToString(), true);
                    }

                    dataInicial = dataInicial.AddDays(1);

                }
                while (d1.fimSemana(dataInicial) || d1.feriado(dataInicial.Year, dataInicial))
                {

                    dataInicial = dataInicial.AddDays(1);

                }


            }
            return dataInicial;

        }
        /// <summary>
        /// funçao que retorna a data final de um prazo prescriçao (nota : o calculo é efetuado tendo em conta apenas dias)
        /// </summary>
        /// <param name="d1"></param>
        /// <param name="dataInicial"></param>
        /// <returns></returns>
        public DateTime RetornaCalculoDiasPrescricao(Artigo d1, DateTime dataInicial)
        {
            DateTime dataFinal = dataInicial.AddDays(d1.Dias);
            return dataFinal;
        }
        /// <summary>
        /// funçao que retorna a data final de um prazo de caducidade (nota : o calculo é efetuado tendo em conta apenas dias)
        /// </summary>
        /// <param name="d1"></param>
        /// <param name="dataInicial"></param>
        /// <returns></returns>
        public DateTime RetornaCalculoDiasCaducidade(Artigo d1, DateTime dataInicial)
        {
            DateTime dataFinal = dataInicial.AddDays(d1.Dias);
            while (d1.fimSemana(dataFinal) || d1.feriado(dataFinal.Year, dataFinal))
            {

                dataFinal = dataFinal.AddDays(1);

            }
            return dataFinal;

        }


    }

}


