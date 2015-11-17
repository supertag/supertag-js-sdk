(function(window) {
    'use strict';

    var StSDK = window.StSDK;

    /**
     * Returns deployment history for the given project
     *
     * @param {Number} projectId Project ID
     *
     * @returns {jqXHR}
     */
    StSDK.prototype.getDeployments = function(projectId) {
        StSDK.validateInt('Project ID', projectId);

        return this.get('projects/' + projectId + '/deployments');
    };

    /**
     * Returns deployment details.
     *
     * @param {Number} projectId Project ID
     * @param {Number} deploymentId Deployment ID
     *
     * @returns {jqXHR}
     */
    StSDK.prototype.getDeploymentDetails = function(projectId, deploymentId) {
        StSDK.validateInt('Project ID', projectId);
        StSDK.validateInt('Deployment ID', deploymentId);

        return this.get('projects/' + projectId + '/deployments/' + deploymentId);
    };

}(window));