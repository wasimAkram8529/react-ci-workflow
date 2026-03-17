def shortCommit() {
  return sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
}

pipeline{
  agent {
    docker {
       image 'node:22'
       label 'agent1'
    }
  }

  stages{
    stage("Update node"){
      steps{
        sh '''
          # check version
          node -v
          npm -v
        '''
      }
    }
    stage('Install Dependencies') {
        steps {
            sh 'npm ci'
        }
    }

    stage("Build"){
      steps{
        sh 'npm run build'
      }
    }

    stage('Test and lint (parallel)') {
       parallel {

        stage ('Tets'){
          steps {
            sh 'npm run test'
          }
        }
  
        stage ('Lint') {
          steps {
            sh 'npm run lint'
          }
        } 

       }
    }

    stage("Artifact build"){
      steps{
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }
  }

  post {
        success {
            echo "Pipeline succeeded"
        }
        failure {
            echo "Pipeline failed"
        }
        always {
            echo "Pipeline finished"
        }
    }

}