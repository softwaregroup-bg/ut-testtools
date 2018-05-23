@Library('global-shared-vars') _
/* */
def node_version = 8

node ('implementation-slaves'){

    stage('Build project and run integration tests'){
        sh "echo ${env.BUILD_CAUSE}"
        build.project node_version
    }
}

