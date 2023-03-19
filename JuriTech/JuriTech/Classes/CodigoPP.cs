/*
*	<copyright file="CodigoPP.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Código Processo Penal</description>
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
    public abstract class CodigoPP : Codigo
    {
        public CodigoPP(Artigo b) : base(b)
        {
        }
        #region Attributes
        #endregion

        #region Methods

        #region Constructors

        /// <summary>
        /// The default Constructor.
        /// </summary>
        public CodigoPP()
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
        ~CodigoPP()
        {
        }
        #endregion

        #endregion
    }
}
