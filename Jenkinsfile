pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker-compose build'
            }
        }
    }

    post {
        always {
            sh 'docker system prune -f'
        }
    }
}
