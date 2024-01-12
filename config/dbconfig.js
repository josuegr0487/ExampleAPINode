const config = {
  user: "sa",
  password: "sa0409",
  database: "company",
  server: "192.168.100.84",
  // port: 1433, //default
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // azure
    trustedconnection: false, // Windows Authentication
    enableArithAbort: true,
    // instancename: "SQLEXPRESS2019", // SQL Server instance name
  },
};

module.exports = config;
