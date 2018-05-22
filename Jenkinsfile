node ('implementation-slaves'){
    def module

    stage('Checkout git'){
        checkout scm
    }

    stage('Build image'){
        module = docker.build("rosko")
    }

    stage('Run ut-tools'){
        module.inside{
            withEnv([
                'npm_config_cache=npm-cache',
                'HOME=.',
            ]){
                    sh 'npm --production=false install --registry=https://nexus-dev.softwaregroup-bg.com/repository/npm-all && { npm ls || true; }'
            }
            sh 'node index.js'
            }
    }
}
