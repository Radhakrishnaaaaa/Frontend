pipeline {
  agent any 
    stages {
        stage ('checkout') {
            steps {
                git 'https://github.com/Radhakrishnaaaaa/Frontend.git'
            }
        }
        stage ('npm install') {
            steps {
                sh ''' npm install -f '''
            }
        }
        stage ('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarScanner'
            }
            steps {
                withSonarQubeEnv('SonarScanner'){
                    sh ''' ${scannerHome}/bin/sonar-scanner '''
                }
            }
        }
    }
}
