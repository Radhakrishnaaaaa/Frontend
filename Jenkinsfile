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
    stage('SonarQube Analysis') {
      steps {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
    }
  }
}
