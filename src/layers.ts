import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import {
  SimpleMarkerSymbol,
  SimpleLineSymbol,
  MeshSymbol3D,
  FillSymbol3DLayer,
  LabelSymbol3D,
  TextSymbol3DLayer,
} from '@arcgis/core/symbols';
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D';
import { labelSymbol3DLine } from './Label';

/* Standalone table for Dates */
export const dateTable = new FeatureLayer({
  portalItem: {
    id: 'b2a118b088a44fa0a7a84acbe0844cb2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
});

/* Chainage Layer  */
var labelChainage = new LabelClass({
  labelExpressionInfo: { expression: '$feature.KmSpot' },
  symbol: {
    type: 'text',
    color: [85, 255, 0],
    haloColor: 'black',
    haloSize: 0.5,
    font: {
      size: 15,
      weight: 'bold',
    },
  },
});

var chainageRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 5,
    color: [255, 255, 255, 0.9],
    outline: {
      width: 0.2,
      color: 'black',
    },
  }),
});

export const chainageLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/N2_Alignment/FeatureServer/5',
  layerId: 5,
  title: 'Chainage',
  elevationInfo: {
    mode: 'relative-to-ground',
  },
  labelingInfo: [labelChainage],
  minScale: 150000,
  maxScale: 0,
  renderer: chainageRenderer,
  // outFields: ['*'],
  popupEnabled: false,
});

// * Pier No layer * //
var pierNoLabelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: 'white',
        },
        size: 10,
        halo: {
          color: 'black',
          size: 1,
        },
        font: {
          family: 'Ubuntu Mono',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 40,
      maxWorldLength: 100,
      minWorldLength: 20,
    },
    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: 'white',
      size: 0.7,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.PIER',
    //value: "{TEXTSTRING}"
  },
});

export const pierNoLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/N2_Alignment/FeatureServer/6',
  layerId: 6,
  labelingInfo: [pierNoLabelClass],
  elevationInfo: {
    mode: 'on-the-ground', //absolute-height, relative-to-ground
  },
  title: 'Pier No',
  // outFields: ['*'],
  popupEnabled: false,
});

// * PROW *//
var prowRenderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ff0000',
    width: '2px',
  }),
});
export const rowLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/N2_Alignment/FeatureServer/1',
  title: 'ROW',
  renderer: prowRenderer,
  definitionExpression: "Extension = 'N2'",
  popupEnabled: false,
});

// * Station Layer * //
const stationLayerTextSymbol = labelSymbol3DLine({
  materialColor: '#d4ff33',
  fontSize: 15,
  fontFamily: 'Ubuntu Mono',
  fontWeight: 'normal',
  haloColor: 'black',
  haloSize: 0.5,
  vOffsetScreenLength: 100,
  vOffsetMaxWorldLength: 700,
  vOffsetMinWorldLength: 80,
});

var labelClass = new LabelClass({
  symbol: stationLayerTextSymbol,
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: 'DefaultValue($feature.Station, "no data")',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: '876de8483da9485aac5df737cbef2143',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Station',
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* Launching girder */
const launchingGirderLabelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: 'red',
        },
        size: 14,
        halo: {
          color: 'black',
          size: 1,
        },
        font: {
          family: 'Ubuntu Mono',
          weight: 'bold',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 45,
      maxWorldLength: 120,
      minWorldLength: 25,
    },
    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: 'red',
      size: 1,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.LAYER',
    //value: "{TEXTSTRING}"
  },
});

export const launchingGirderLayer = new FeatureLayer({
  portalItem: {
    id: '876de8483da9485aac5df737cbef2143',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  labelingInfo: [launchingGirderLabelClass],
  elevationInfo: {
    mode: 'on-the-ground', //absolute-height, relative-to-ground
  },
  title: 'Girder Launcher Location',
  // outFields: ['*'],
  definitionExpression: 'LAYER IS NOT NULL',
});

// * Viaduct * //
const colorViaduct = [
  [225, 225, 225, 0.1], // To be Constructed (white)
  [130, 130, 130, 0.5], // Under Construction
  [255, 0, 0, 0.8], // Delayed
  [0, 112, 255, 0.8], // Completed
];

function renderViaductLayer() {
  const renderer = new UniqueValueRenderer({
    field: 'Status1',
  });

  for (var i = 0; i < colorViaduct.length; i++) {
    renderer.addUniqueValueInfo({
      value: i + 1,
      symbol: new MeshSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: colorViaduct[i],
              colorMixMode: 'replace',
            },
            edges: new SolidEdges3D({
              color: [225, 225, 225, 0.3],
            }),
          }),
        ],
      }),
    });
  }
  viaductLayer.renderer = renderer;
}

export const viaductLayer = new SceneLayer({
  portalItem: {
    id: 'd3fc705f1ec14d888214bfdbf37f1fe7',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  elevationInfo: {
    mode: 'absolute-height', //absolute-height, relative-to-ground
  },
  title: 'Viaduct',
  labelsVisible: false,
  popupTemplate: {
    title: '<p>{PierNumber}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Type',
            label: 'Type',
          },
          {
            fieldName: 'CP',
          },
          {
            fieldName: 'planned_date',
            label: 'Target Date',
          },
          {
            fieldName: 'uniqueID',
          },
        ],
      },
    ],
  },
});

renderViaductLayer();

export const viaductLayerStatus4 = new SceneLayer({
  portalItem: {
    id: 'd3fc705f1ec14d888214bfdbf37f1fe7',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  definitionExpression: 'Status1 = 4',
});
