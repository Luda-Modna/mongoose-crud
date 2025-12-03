module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  if (err.name === 'CastError') {
    return res.status(400).send({
      errors: [
        {
          status: 400,
          title: `Invalid ID format: ${err.value}`,
        },
      ],
    });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).send({
      errors: Object.values(err.errors).map(e => ({
        status: 400,
        title: e.message,
      })),
    });
  }

  if (err.code === 11000) {
    return res.status(409).send({
      errors: [
        {
          status: 409,
          title: 'Duplicate value',
          detail: err.keyValue,
        },
      ],
    });
  }

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({
      errors: [
        {
          status: 400,
          title: 'Invalid JSON format',
        },
      ],
    });
  }

  const status = err.status ?? 500;

  res.status(status).send({
    errors: [
      {
        status,
        title: err.message ?? 'Server Error',
      },
    ],
  });
};
