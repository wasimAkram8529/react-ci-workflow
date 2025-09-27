pipeline{
  agent any

  stages{
    stage("Update node"){
      steps{
        sh '''
          curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
          export NVM_DIR="$HOME/.nvm"
          [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
          nvm install 22
          nvm use 22

          # check version
          node -v
          npm -v
        '''
      }
    }
    stage('Install Dependencies') {
        steps {
            sh 'npm i'
        }
    }

    stage("Build"){
      steps{
        sh 'npm run build'
      }
    }

    stage("Artifact build"){
      steps{
        archiveArtifacts artifacts: 'dist/**'
      }
    }
  }
}