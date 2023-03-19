/*
*	<copyright file="Tema.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Classe tema</description>
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
    public class Tema
    {
        #region Attributes
        string nome;
        int id;
        int id_tipo;
        int id_processo;

        #endregion

        #region Methods

        #region Constructors
        /// <summary>
        /// The default Constructor.
        /// </summary>
        public Tema(string nome, int id, int id_tipo, int id_processo)
        {
            this.nome = nome;
            this.id = id;
            this.id_tipo = id_tipo;
            this.id_processo = id_processo;
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
        ~Tema()
        {
        }
        #endregion

        #endregion
    }
}