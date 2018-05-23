@Library('global-shared-vars') _

node ('implementation-slaves'){

    stage('Checkout git'){
        checkout scm
    }

    stage('Build project and run integration tests'){
        build.project()
    }
}

