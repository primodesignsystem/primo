const multirelease = require('multi-semantic-release');
const { getManifest } = require('multi-semantic-release/lib/getManifest');

const dryRun = false;

async function release() {
  try {
    const paths = [
      `${__dirname}/browserlist-config/package.json`,
      `${__dirname}/eslint-config/package.json`,
      `${__dirname}/prettier-config/package.json`,
      `${__dirname}/stylelint-config/package.json`,
      `${__dirname}/animation/package.json`,
      `${__dirname}/colour/package.json`,
      `${__dirname}/components/package.json`,
      `${__dirname}/elements/package.json`,
      `${__dirname}/grid/package.json`,
      `${__dirname}/icons/package.json`,
      `${__dirname}/icons-react/package.json`,
      `${__dirname}/icons-web-components/package.json`,
      `${__dirname}/layout/package.json`,
      `${__dirname}/react/package.json`,
      `${__dirname}/themes/package.json`,
      `${__dirname}/tokens/package.json`,
      `${__dirname}/typography/package.json`,
      `${__dirname}/web-components/package.json`,
    ];

    await multirelease(paths, { dryRun });
  } catch (error) {
    // Log out errors.
    console.error('[multi-semantic-release]:', error);
    process.exit(1);
  }
}

release();
