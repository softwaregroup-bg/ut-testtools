@Library('global-shared-vars') _
/* */
def node_version = 8

node ('implementation-slaves'){

    stage('Build project and run integration tests'){
        build.project node_version
    }
}

