import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tools: [{type: 'autogenerated', dirName: 'tools'}],
  processos: [{type: 'autogenerated', dirName: 'processes'}],
  devsecops: [{type: 'autogenerated', dirName: 'devsecops'}],
};

module.exports = sidebars;

