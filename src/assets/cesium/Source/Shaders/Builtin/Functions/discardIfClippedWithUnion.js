//This file is automatically rebuilt by the Cesium build process.
define(function() {
    'use strict';
    return "/**\n\
 * Clip a fragment by an array of clipping planes. Clipping plane regions are joined with the union operation,\n\
 * therefore if a fragment is clipped by any of the planes, it is discarded.\n\
 *\n\
 * @name czm_discardIfClippedWithUnion\n\
 * @glslFunction\n\
 *\n\
 * @param {vec4[]} clippingPlanes The array of planes used to clip, defined in eyespace.\n\
 * @param {int} clippingPlanesLength The number of planes in the array of clipping planes.\n\
 * @returns {float} The distance away from a clipped fragment, in eyespace\n\
 */\n\
float czm_discardIfClippedWithUnion(vec4 clippingPlanes[czm_maxClippingPlanes], int clippingPlanesLength)\n\
{\n\
    if (clippingPlanesLength > 0)\n\
    {\n\
        vec4 position = czm_windowToEyeCoordinates(gl_FragCoord);\n\
        vec3 clipNormal = vec3(0.0);\n\
        vec3 clipPosition = vec3(0.0);\n\
        float clipAmount = 0.0;\n\
        float pixelWidth = czm_metersPerPixel(position);\n\
\n\
        for (int i = 0; i < czm_maxClippingPlanes; ++i)\n\
        {\n\
            if (i == clippingPlanesLength)\n\
            {\n\
                break;\n\
            }\n\
\n\
            clipNormal = clippingPlanes[i].xyz;\n\
            clipPosition = -clippingPlanes[i].w * clipNormal;\n\
\n\
            float amount = dot(clipNormal, (position.xyz - clipPosition)) / pixelWidth;\n\
            clipAmount = max(amount, clipAmount);\n\
\n\
            if (amount <= 0.0)\n\
            {\n\
                discard;\n\
            }\n\
        }\n\
\n\
        return clipAmount;\n\
    }\n\
\n\
    return 0.0;\n\
}\n\
";
});