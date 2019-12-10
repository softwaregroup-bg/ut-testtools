node ('implementation-slaves'){
    def module

    stage('Checkout git'){
        checkout scm
    }

    stage('Build image'){
        module = docker.image("nexus-dev.softwaregroup.com:5000/alpine-38/alpine-nodejs:8.14.0-6.4.1")
    }

    stage('Run ut-tools'){
        module.inside{
            withEnv([ 'npm_config_cache=npm-cache', 'HOME=.', ]){
                    sh 'npm --production=false install --registry=https://nexus-dev.softwaregroup.com/repository/npm-all && { npm ls || true; }'
                    sh 'npm run jenkins'
            }
        }
    }
}
