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

    stage('Publish reports'){
        checkstyle canComputeNew: false, defaultEncoding: '', healthy: '', pattern: '*/lint*.xml', unHealthy: ''
    }
}
