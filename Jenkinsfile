node ('implementation-slaves'){
    def module

    stage('Checkout git'){
        checkout scm
    }

    stage('Build image'){
        module = docker.image("nexus-dev.softwaregroup-bg.com:5000/alpine-nodejs:3.7-8.10.0-5.6.0")
    }

    stage('Run ut-tools'){
        module.inside{
            withEnv([
                'npm_config_cache=npm-cache',
                'HOME=.',
            ]){
                    sh 'npm --production=false install --registry=https://nexus-dev.softwaregroup-bg.com/repository/npm-all && { npm ls || true; }'
            }
            sh 'npm run jenkins'
            }
    }
}
