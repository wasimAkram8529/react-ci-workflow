pipeline{
  agent any

  stages{
    stage("Build"){
      steps{
        sh 'npm run build'
      }
    }

    stage('Install Dependencies') {
        steps {
            sh 'npm ci'
        }
    }

    stage("Artifact build"){
      steps{
        archiveArtifacts artifacts: 'dist/**'
      }
    }
  }
}