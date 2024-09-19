exports.handler = async (event, context) => {
    // Lógica de tu API aquí
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hola desde la función!" }),
    };
  };
  