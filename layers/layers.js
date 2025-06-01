var wms_layers = [];

var format_Fokontany_0 = new ol.format.GeoJSON();
var features_Fokontany_0 = format_Fokontany_0.readFeatures(json_Fokontany_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fokontany_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fokontany_0.addFeatures(features_Fokontany_0);
var lyr_Fokontany_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fokontany_0, 
                style: style_Fokontany_0,
                popuplayertitle: 'Fokontany',
                interactive: true,
    title: 'Fokontany<br />\
    <img src="styles/legend/Fokontany_0_0.png" /> Ambatofotsy Gara<br />\
    <img src="styles/legend/Fokontany_0_1.png" /> Ambatolokanga<br />\
    <img src="styles/legend/Fokontany_0_2.png" /> Ambohaja<br />\
    <img src="styles/legend/Fokontany_0_3.png" /> Ambohibololona<br />\
    <img src="styles/legend/Fokontany_0_4.png" /> Ambohikely<br />\
    <img src="styles/legend/Fokontany_0_5.png" /> Ambohimahatsinjo<br />\
    <img src="styles/legend/Fokontany_0_6.png" /> Ambohimiadana Nord<br />\
    <img src="styles/legend/Fokontany_0_7.png" /> Ambohitsararay<br />\
    <img src="styles/legend/Fokontany_0_8.png" /> Ambohitsilaizina<br />\
    <img src="styles/legend/Fokontany_0_9.png" /> Ambolamena<br />\
    <img src="styles/legend/Fokontany_0_10.png" /> Ampanataovana<br />\
    <img src="styles/legend/Fokontany_0_11.png" /> Andrefandrano<br />\
    <img src="styles/legend/Fokontany_0_12.png" /> Anjomakely<br />\
    <img src="styles/legend/Fokontany_0_13.png" /> Ankadivola<br />\
    <img src="styles/legend/Fokontany_0_14.png" /> Ankazobe<br />\
    <img src="styles/legend/Fokontany_0_15.png" /> Ankorondrano<br />\
    <img src="styles/legend/Fokontany_0_16.png" /> Anosibe<br />\
    <img src="styles/legend/Fokontany_0_17.png" /> Antanimenabe<br />\
    <img src="styles/legend/Fokontany_0_18.png" /> Antsahabe<br />\
    <img src="styles/legend/Fokontany_0_19.png" /> Avarabohitra<br />\
    <img src="styles/legend/Fokontany_0_20.png" /> Faliarivo<br />\
    <img src="styles/legend/Fokontany_0_21.png" /> Masomboay<br />\
    <img src="styles/legend/Fokontany_0_22.png" /> Moratsiazo<br />\
    <img src="styles/legend/Fokontany_0_23.png" /> Soamanandray<br />\
    <img src="styles/legend/Fokontany_0_24.png" /> Soavina<br />\
    <img src="styles/legend/Fokontany_0_25.png" /> Tsiafahy<br />\
    <img src="styles/legend/Fokontany_0_26.png" /> Vatovaky<br />\
    <img src="styles/legend/Fokontany_0_27.png" /> <br />' });
var format_Localitee_1 = new ol.format.GeoJSON();
var features_Localitee_1 = format_Localitee_1.readFeatures(json_Localitee_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localitee_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localitee_1.addFeatures(features_Localitee_1);
var lyr_Localitee_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localitee_1, 
                style: style_Localitee_1,
                popuplayertitle: 'Localitee',
                interactive: true,
                title: '<img src="styles/legend/Localitee_1.png" /> Localitee'
            });

lyr_Fokontany_0.setVisible(true);lyr_Localitee_1.setVisible(true);
var layersList = [lyr_Fokontany_0,lyr_Localitee_1];
lyr_Fokontany_0.set('fieldAliases', {'fid': 'fid', 'FOKONTANY': 'FOKONTANY', 'P_CODE': 'P_CODE', 'F_CODE': 'F_CODE', 'COMMUNE': 'COMMUNE', 'COM_PCODE': 'COM_PCODE', 'C_CODE': 'C_CODE', 'DISTRICT': 'DISTRICT', 'DIST_PCODE': 'DIST_PCODE', 'D_CODE': 'D_CODE', 'REGION': 'REGION', 'REG_PCODE': 'REG_PCODE', 'R_CODE': 'R_CODE', 'SOURCE': 'SOURCE', 'date': 'date', 'surf_tot': 'surf_tot', 'surf': 'surf', '1': '1', '2': '2', '3': '3', 'X': 'X', 'Y': 'Y', });
lyr_Localitee_1.set('fieldAliases', {'fid': 'fid', 'CLAS_ADM': 'CLAS_ADM', 'NOM_LOCA': 'NOM_LOCA', 'NOM_COMMUN': 'NOM_COMMUN', 'DISTRICT': 'DISTRICT', 'REGION': 'REGION', 'X': 'X', 'Y': 'Y', 'fid_2': 'fid_2', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Fokontany_0.set('fieldImages', {'fid': '', 'FOKONTANY': '', 'P_CODE': '', 'F_CODE': '', 'COMMUNE': '', 'COM_PCODE': '', 'C_CODE': '', 'DISTRICT': '', 'DIST_PCODE': '', 'D_CODE': '', 'REGION': '', 'REG_PCODE': '', 'R_CODE': '', 'SOURCE': '', 'date': '', 'surf_tot': '', 'surf': '', '1': '', '2': '', '3': '', 'X': '', 'Y': '', });
lyr_Localitee_1.set('fieldImages', {'fid': '', 'CLAS_ADM': '', 'NOM_LOCA': '', 'NOM_COMMUN': '', 'DISTRICT': '', 'REGION': '', 'X': '', 'Y': '', 'fid_2': '', 'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'GID_3': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_Fokontany_0.set('fieldLabels', {'fid': 'hidden field', 'FOKONTANY': 'header label - always visible', 'P_CODE': 'hidden field', 'F_CODE': 'hidden field', 'COMMUNE': 'hidden field', 'COM_PCODE': 'hidden field', 'C_CODE': 'hidden field', 'DISTRICT': 'hidden field', 'DIST_PCODE': 'hidden field', 'D_CODE': 'hidden field', 'REGION': 'hidden field', 'REG_PCODE': 'hidden field', 'R_CODE': 'hidden field', 'SOURCE': 'hidden field', 'date': 'hidden field', 'surf_tot': 'hidden field', 'surf': 'header label - always visible', '1': 'hidden field', '2': 'hidden field', '3': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Localitee_1.set('fieldLabels', {'fid': 'hidden field', 'CLAS_ADM': 'hidden field', 'NOM_LOCA': 'header label - always visible', 'NOM_COMMUN': 'header label - always visible', 'DISTRICT': 'header label - always visible', 'REGION': 'header label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'fid_2': 'hidden field', 'GID_0': 'hidden field', 'NAME_0': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'GID_3': 'hidden field', 'NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'NL_NAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'CC_3': 'hidden field', 'HASC_3': 'hidden field', });
lyr_Localitee_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});