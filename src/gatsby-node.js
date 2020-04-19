exports.onPreInit = ({ reporter }, options) => {
  if (!options.domain) {
    reporter.warn(
      `The Plausible Analytics plugin requires a domain. Did you mean to add it?`
    );
  }
};
