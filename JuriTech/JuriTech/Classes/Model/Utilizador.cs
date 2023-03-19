/*
*	<copyright file="Cliente.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Classe Utilizador</description>
**/
using System;
using System.Collections.Generic;
using System.Linq;


namespace JuriTech.Classes.Model
{
    /// <summary>
    /// Purpose:
    /// Created by: JuriTech Team
    /// Created on: 01/04/2022
    /// </summary>
    /// <remarks></remarks>
    /// <example></example>
    public class Utilizador
    {
        #region Attributes
        private int user_id;
        private string nome;
        private string email;
        private string password;
        #endregion

        #region Methods

        #region Constructors
        /// <summary>
        /// The default Constructor.
        /// </summary>
        public Utilizador(int user_id, string nome, string email, string password)
        {
            this.user_id = user_id;
            this.nome = nome;
            this.email = email;
            this.password = password;
        }
        #endregion

        #region Properties
        public int User_id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        #endregion

        #region Functions

        #endregion

        #region Overrides
        #endregion

        #region Destructor
        /// <summary>
        /// The destructor.
        /// </summary>
        ~Utilizador()
        {
        }
        #endregion

        #endregion
    }
}
