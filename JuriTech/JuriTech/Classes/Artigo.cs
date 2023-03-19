/*
*	<copyright file="Artigo.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Classe Artigo</description>
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
    public class Artigo
    {
        #region Attributes

        private int id;
        private string nome;
        private DateTime inicio;
        private DateTime fim;
        private DateTime calcula;
        private bool ferias, diasUteis;

        #endregion

        #region Methods

        #region Constructors

        /// <summary>
        /// The default Constructor.
        /// </summary>
        public Artigo(int id, string nome, DateTime inicio, bool ferias, bool diasUteis)
        {
            this.id = id;
            this.nome = nome;
            this.inicio = inicio;
            this.ferias = ferias;
            this.diasUteis = diasUteis;
        }

        #endregion

        #region Properties
        public int Id
        {
            get { return id; }
            set { id = value; }
        }
        public string Nome
        {
            get { return nome; }
            set { nome = value; }
        }
        public DateTime Inicio
        {
            get { return inicio; }
            set { inicio = value; }
        }
        #endregion

        #region Functions
        #endregion

        #region Overrides
        #endregion

        #region Destructor
        /// <summary>
        /// The destructor.
        /// </summary>
        ~Artigo()
        {
        }
		#endregion

		#endregion
    }
}
