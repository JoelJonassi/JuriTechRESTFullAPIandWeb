/*
*	<copyright file="Prazo.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Classe Abstrata Prazo</description>
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
    public abstract class Prazo
    {
        #region Attributes
        
        private int diasPrazo;
        private int diasAtrasado;
        private int n_diasTabelado;

        Artigo artigoPrazo;
        Prazo prazos;

        #endregion

        #region Methods

        #region Constructors

        /// <summary>
        /// The default Constructor.
        /// </summary>
        public Prazo(Prazo b)
        {
            this.prazos = b;
        }

        public abstract Prazo getPrazo();
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
        ~Prazo()
        {
        }
        #endregion

        #endregion
    }
}