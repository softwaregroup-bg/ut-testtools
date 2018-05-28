@Library('global-shared-vars') _

node ('implementation-slaves'){

    stage('Delete current workspace'){
        deleteDir()
    }

    stage('Checkout SCM repository'){
        checkout scm
    }

    stage('Build project'){
        build.project()
    }
}
