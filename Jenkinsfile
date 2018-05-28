@Library('global-shared-vars') _

node ('implementation-slaves'){

    stage('Delete current workspace'){
        deleteDir()
    }


    stage('Checkout SCM repository'){
        checkout scm
    }

    stage('Just a test'){
        echo "Build cause is ${BUILD_CAUSE}"
        echo "BUILD NUMBER is ${BUILD_NUMBER}"
    }
    stage('Build project'){
        build.project()
    }
}
