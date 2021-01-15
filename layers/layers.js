var wms_layers = [];

var format_DGF2020danslesEPCI_0 = new ol.format.GeoJSON();
var features_DGF2020danslesEPCI_0 = format_DGF2020danslesEPCI_0.readFeatures(json_DGF2020danslesEPCI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGF2020danslesEPCI_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGF2020danslesEPCI_0.addFeatures(features_DGF2020danslesEPCI_0);
var lyr_DGF2020danslesEPCI_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DGF2020danslesEPCI_0, 
                style: style_DGF2020danslesEPCI_0,
                interactive: true,
    title: 'DGF 2020 dans les EPCI<br />\
    <img src="styles/legend/DGF2020danslesEPCI_0_0.png" /> Inférieure à -2%<br />\
    <img src="styles/legend/DGF2020danslesEPCI_0_1.png" /> -2% à +2%<br />\
    <img src="styles/legend/DGF2020danslesEPCI_0_2.png" /> Supérieure à 2% <br />'
        });

lyr_DGF2020danslesEPCI_0.setVisible(true);
var layersList = [lyr_DGF2020danslesEPCI_0];
lyr_DGF2020danslesEPCI_0.set('fieldAliases', {'code': 'code', 'Nom': 'Nom', 'Evo-DGF': 'Evo-DGF', 'DGF': 'DGF', 'DGF-hab': 'DGF-hab', 'pDGF-RRF': 'pDGF-RRF', 'vDGF-RRF': 'vDGF-RRF', 'pPerequati': 'pPerequati', 'EvoDGF': 'EvoDGF', 'tttt': 'tttt', 'vDGF_RRF': 'vDGF_RRF', });
lyr_DGF2020danslesEPCI_0.set('fieldImages', {'code': 'Hidden', 'Nom': 'TextEdit', 'Evo-DGF': 'TextEdit', 'DGF': 'TextEdit', 'DGF-hab': 'TextEdit', 'pDGF-RRF': 'TextEdit', 'vDGF-RRF': 'TextEdit', 'pPerequati': 'TextEdit', 'EvoDGF': 'Hidden', 'tttt': 'Hidden', 'vDGF_RRF': 'Hidden', });
lyr_DGF2020danslesEPCI_0.set('fieldLabels', {'Nom': 'inline label', 'Evo-DGF': 'inline label', 'DGF': 'inline label', 'DGF-hab': 'inline label', 'pDGF-RRF': 'inline label', 'vDGF-RRF': 'inline label', 'pPerequati': 'inline label', });
lyr_DGF2020danslesEPCI_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});