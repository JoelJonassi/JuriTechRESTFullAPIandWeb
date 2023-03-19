/*
*	<copyright file="Tipo.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Classe tipo</description>
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
    public class Tipo
    {
        #region Attributes
        string nome;
        int id;

        #endregion

        #region Methods

        #region Constructors
        /// <summary>
        /// The default Constructor.
        /// </summary>
        public Tipo(string nome, int id)
        {
            this.nome = nome;
            this.id = id;
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
        ~Tipo()
        {
        }
        #endregion

        #endregion
    }
}