@Library('global-shared-vars') _

node ('implementation-slaves'){

    stage('Delete current workspace'){
        deleteDir()
    }


    stage('Checkout SCM repository'){
        checkout scm
    }

    stage('Just a test'){
        echo "BUILD NUMBER is ${BUILD_NUMBER}"
    }
    stage('Build project'){
        build.project()
    }
}
