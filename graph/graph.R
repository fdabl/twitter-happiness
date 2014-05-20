# -------------------------------------------------------
# plots a histogram of the emotionally rated words with
# its empirical density line and the normal density line
# -------------------------------------------------------
library('e1071')
library('ggplot2')

data <- read.table('../data/ratings.txt', header = TRUE)
rating <- data$happiness_average

png('happiness.png')

# draw the basic histogram with empirical density line
graph <- ggplot(data, aes(rating)) +
         geom_line(aes(y = ..density.., colour = 'Empirical'), stat = 'density') +
         geom_histogram(aes(y = ..density..), alpha = 0.8) +
         labs(x = 'Happiness Rating', y = 'Frequency', title = 'Happiness Histogram')


# add the normal density line
stat <- graph +
        stat_function(fun = dnorm, args = list(mean = mean(rating), sd = sd(rating)),
                      aes(colour = 'Normal'))

# change the look and feel
fin <- stat +
       scale_colour_manual(name = 'Density', values = c('red', 'blue')) +
       theme(legend.position = c(0.85, 0.85))

skewed <- skewness(rating)
print(paste('Skewness: ', skewed))

fin
dev.off()
