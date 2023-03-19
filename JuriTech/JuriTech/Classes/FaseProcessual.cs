/*
*	<copyright file="FaseProcessual.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Classe Fase Processual</description>
**/
using System;
using System.Collections.Generic;
using System.Linq;


namespace JuriTech.Classes
{
    /// <summary>
    /// Purpose:
    /// Created by: JuriTech Team
    /// Created on: 01/04/2022
    /// </summary>
    /// <remarks></remarks>
    /// <example></example>
    public class FaseProcessual
    {
        #region Attributes
        private int id;
        private int id_processo;
        private string tipo;
        private bool estado;
        private DateTime data_entrada;
        private DateTime data_saida;
        private int n_dias;
        #endregion

        #region Methods

        #region Constructors
        /// <summary>
        /// The default Constructor.
        /// </summary>
        public FaseProcessual(int id, int id_processo, string tipo, bool estado, DateTime data_entrada, DateTime data_saida, int n_dias)
        {
            this.id = id;
            this.id_processo = id_processo;
            this.tipo = tipo;
            this.estado = estado;
            this.data_entrada = data_entrada;
            this.data_saida = data_saida;
            this.n_dias = n_dias;
        }

        #endregion

        #region Properties
        #endregion

        #region Functions
        #endregion

        #region Overrides
        #endregion

        #region Destructor
        /// <summary>
        /// The destructor.
        /// </summary>
        ~FaseProcessual()
        {
        }
        #endregion

        #endregion
    }
}