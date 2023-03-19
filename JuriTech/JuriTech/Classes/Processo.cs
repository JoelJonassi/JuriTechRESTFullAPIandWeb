/*
*	<copyright file="Processo.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Classe Processo</description>
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
    public class Processo
    {
        #region Attributes
        int num;
        float valor;
        DateTime data;
        string notas;
        Utilizador cliente;
        int id_tipo;
        #endregion

        #region Methods

        #region Constructors

        /// <summary>
        /// The default Constructor.
        /// </summary>
        public Processo()
        {
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
        ~Processo()
        {
        }
        #endregion

        #endregion
    }
}
