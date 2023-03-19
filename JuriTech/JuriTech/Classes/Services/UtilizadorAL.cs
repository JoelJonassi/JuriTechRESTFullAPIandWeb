/*
*	<copyright file="AccessLayer.cs" company="JuriTech">
*		Copyright (c) 2022 All Rights Reserved
*	</copyright>
* 	<author>JuriTech Team</author>
*   <date>01/04/2022</date>
*	<description>Classe Utilizador Access Layer</description>
**/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;


namespace JuriTech.Classes.Services
{
    /// <summary>
    /// Purpose:
    /// Created by: JuriTech Team
    /// Created on: 01/04/2022
    /// </summary>
    /// <remarks></remarks>
    /// <example></example>
    public class UtilizadorAL
    {

        #region Attributes
        static string serverName = "127.0.0.1";     // localhost
        static string port = "5432";                // porta default
        static string userName = "juritech";        // Utilizador criado na DB
        static string password = "juritech";        // Password do utilizador da DB
        static string databaseName = "JuritechDB";    // Nome da DB
        string connString = null;
        #endregion

        #region Methods

        #region Constructors
        /// <summary>
        /// The default Constructor.
        /// </summary>
        public UtilizadorAL()
        {
            connString = String.Format("Server={0};Port={1};User Id={2};Password={3};Database={4};", serverName, port, userName, password, databaseName);
        }
        #endregion

        #region Properties
        #endregion
        
        #region Functions
        SqlConnection = new SqlConnection;
        public SqlConnection conexao()
        {

        }

        public void InserirUtilizador(int user_id, string nome, string email, string password)
        {

            try
            {
                using (NpgsqlConnection pgsqlConnection = new NpgsqlConnection(connString))
                {                    
                    pgsqlConnection.Open(); //Abrir a conexão com o PgSQL

                    string cmdInserir = String.Format("Insert Into utilizador(user_id,password,email, nome) values({0},'{1}','{2}', '{3}')", user_id, nome, email, password);

                    using (NpgsqlCommand pgsqlcommand = new NpgsqlCommand(cmdInserir, pgsqlConnection))
                    {
                        pgsqlcommand.ExecuteNonQuery();
                    }
                }
            }
            catch (NpgsqlException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                pgsqlConnection.Close();
            }
        }
    }
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
}
